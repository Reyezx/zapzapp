'use server';

import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

interface SearchResponse {
  users: {
    id: string;
    name: string | null;
    email: string;
    image: string | null;
  }[];
  hasMore: boolean;
}

export async function searchUsers(query: string, page: number = 1): Promise<SearchResponse> {
  const pageSize = 10;
  const skip = (page - 1) * pageSize;
  
  try {
    let users;
    
    if (!query) {
      // If no query, return all users sorted by name
      users = await prisma.user.findMany({
        orderBy: {
          name: 'asc',
        },
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
        skip,
        take: pageSize + 1,
      });
    } else {
      // If there's a query, search with filter
      users = await prisma.user.findMany({
        where: {
          OR: [
            {
              name: {
                contains: query,
                mode: 'insensitive',
              },
            },
            {
              email: {
                contains: query,
                mode: 'insensitive',
              },
            }
          ]
        },
        orderBy: {
          name: 'asc',
        },
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
        skip,
        take: pageSize + 1,
      });
    }

    // Check if there are more results
    const hasMore = users.length > pageSize;
    const paginatedUsers = users.slice(0, pageSize);

    return { users: paginatedUsers, hasMore };
  } catch (error) {
    console.error('Error searching users:', error);
    throw new Error('Failed to search users');
  }
} 
interface PaginateOptions {
  page?: number;
  limit?: number;
}

interface PaginateResult {
  skip: number;
  limit: number;
  page: number;
}

// Calculate pagination parameters from query options
export const getPaginationParams = (options: PaginateOptions): PaginateResult => {
  const page = Number(options.page) || 1;
  const limit = Number(options.limit) || 10;
  const skip = (page - 1) * limit;

  return { skip, limit, page };
};

export const buildPaginationMeta = (total: number, page: number, limit: number) => {
  return {
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
    hasNextPage: page < Math.ceil(total / limit),
    hasPrevPage: page > 1,
  };
};
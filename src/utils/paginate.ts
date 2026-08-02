interface PaginateOptions {
  page?: number | string;
  limit?: number | string;
}

interface PaginateResult {
  skip: number;
  limit: number;
  page: number;
}

// Calculate pagination parameters from query options
export const getPaginationParams = (options: PaginateOptions): PaginateResult => {
  const page = Math.max(1, Number(options.page) || 1);
  const limit = Math.min(100, Math.max(1, Number(options.limit) || 10));
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
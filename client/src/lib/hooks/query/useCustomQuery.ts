import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useToast } from '@/lib/hooks/toast';

type ErrorType = AxiosError & {
  response: { data: { message: string } };
};

export default function useCustomQuery<
  TQueryFnData = unknown,
  TError extends ErrorType = ErrorType,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'queryKey' | 'queryFn'
  >
): UseQueryResult<TData, TError> {
  const { toast } = useToast();
  return useQuery({
    queryKey,
    queryFn,
    ...options,
    onError: (error) => {
      options?.onError?.(error);

      const message = error.response.data.message;

      toast({
        title: message,
        variant: 'destructive',
        duration: 3000,
      });

      return;
    },
  });
}

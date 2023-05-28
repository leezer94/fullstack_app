import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/lib/hooks/toast';

type ErrorType = AxiosError & {
  response: { data: { message: string } };
};

export default function useCustomMutation<
  TData = unknown,
  TError extends ErrorType = ErrorType,
  TVariables = void,
  TContext = unknown
>(
  mutationFn: MutationFunction<TData, TVariables>,
  options?: Omit<
    UseMutationOptions<TData, TError, TVariables, TContext>,
    'mutationFn'
  >
): UseMutationResult<TData, TError, TVariables, TContext> {
  const { toast } = useToast();
  return useMutation({
    mutationFn,
    ...options,
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);

      const message = error.response?.data.message;

      toast({
        title: message,
        description: error.message,
        variant: 'destructive',
        duration: 2000,
      });
    },
  });
}

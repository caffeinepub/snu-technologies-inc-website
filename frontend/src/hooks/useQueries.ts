import { useMutation } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSubmitContactForm() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async ({
      name,
      email,
      phone,
      company,
      message,
    }: {
      name: string;
      email: string;
      phone: string;
      company: string;
      message: string;
    }) => {
      if (!actor) throw new Error('Backend not available');
      const result = await actor.submitContactForm(name, email, phone, company, message);
      return result;
    },
  });
}

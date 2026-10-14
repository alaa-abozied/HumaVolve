import { apiClient } from './axios';
import type { User } from '@/types/user.types';

export const usersApi = {
  getAll: () => apiClient.get<User[]>('/users').then((r) => r.data),
  getById: (id: string) => apiClient.get<User>(`/users/${id}`).then((r) => r.data),
};

import { useResolve } from '@wox-team/wox-inject';
import { AuthService } from './auth_service';

export function useUser() {
  const authService = useResolve(AuthService);

  return authService.user.value;
}

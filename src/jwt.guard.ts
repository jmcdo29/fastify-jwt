import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(private readonly auth: AuthService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const req = context.switchToHttp().getRequest();
      const authHeader = req.headers['authorization'];
      const token = authHeader.split(' ')[1];
      const user = this.auth.verifyJwt(token);
      if (!user) {
        return false;
      }
      req.user = user;
      return true;
    } catch (e) {
      return false;
    }
  }
}

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwt: JwtService) {}

  private users: Array<{email: string, password: string}> = [
    {
      email: 'test@test.com',
      password: 's1mple',
    }, {
      email: 'another@test.com',
      password: 'easy2guess',
    }, {
      email: 'last@test.com',
      password: 's0methingelse',
    }
  ];

  login(user: {email: string, password: string}): string {
    const foundUser = this.users.find(u => u.email === user.email && u.password === user.password);
    return this.jwt.sign(foundUser.email);
  }

  verifyJwt(payload: string): { email: string } {
    const jwt = this.jwt.verify(payload);
    return { email: jwt.email };
  }
}

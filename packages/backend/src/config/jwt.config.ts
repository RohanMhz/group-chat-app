import { Injectable } from '@nestjs/common';
import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt';

interface CustomJwtModuleOptions extends JwtModuleOptions {
  transform?: (payload: any) => any;
}
@Injectable()
export class jwtConfig implements JwtOptionsFactory {
  createJwtOptions(): CustomJwtModuleOptions {
    return {
      secret: '329b076a85adebf1103882e99cfc78e29b9cc10d97111882d07669dfc8d7ba4d',
      signOptions: {
        expiresIn: '24h',
      },
      transform: (payload) => ({ _id: payload._id, email: payload.email }), // Custom transformer
    };
  }
}
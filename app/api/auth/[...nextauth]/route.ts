//TODO - implement google auth (this needs a google cloud account)
// timestamp -- 2:18:02
import { connect } from "http2";
import NextAuth from "next-auth/next";
import { CredentialsProvider } from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
    id:'Credentials',
    name: 'Credentials',
    credentials: {
        username: {label: 'Username', type: 'text'},
        password: {label: 'Password', type: 'password'}
    }
    async authorize(credentials){
        await connect();
        try {

        } catch (err){
            let message = 'Throwing non errors? Wow.';
            if (err instanceof Error) message = err.message;
            throw new Error(message)
        }
    }
  })
  ],
});

export {handler as GET, handler as POST};

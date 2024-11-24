/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"

export const { handlers, auth, signIn, signOut} = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        })
    ]
})
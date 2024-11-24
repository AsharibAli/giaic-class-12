// import { SessionWrapper } from "@/components/SessionWrapper";
// import AuthComponent from "@/components/login/AuthComponent";
// import SignOutComponent from "@/components/login/SignOutComponent";
// import { auth } from "@/lib/auth";

// export default async function Login() {
//   const session = await auth();
//   const isAuthenticated = !!session?.user;

//   return (
//     <div>
//       <SessionWrapper>
//         {isAuthenticated
//           ? <SignOutComponent />
//           : <AuthComponent />
//         }
//       </SessionWrapper>
//     </div>
//   );
// }

export default function Home() {
  return <div>Clerk Authentication</div>;
}

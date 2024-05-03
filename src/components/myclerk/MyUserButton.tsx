import { UserButton } from '@clerk/nextjs';

const MyUserButton = () => {
  return (
    <UserButton
      afterSignOutUrl='/sign-in'
    />
  )
}

export default MyUserButton
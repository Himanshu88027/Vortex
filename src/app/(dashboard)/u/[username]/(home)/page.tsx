import { StreamPlayer } from "@/components/stream-player";
import { getSelfByUsername } from "@/lib/auth-service"
import { auth } from "@/next-auth";

interface CreatorLayoutProps {
  params: {
    username: string
  }
}

const CreatorPage = async ({
  params
}: CreatorLayoutProps) => {
  const user = await getSelfByUsername(params.username);
  const currentUser = await auth()

  if (!user || currentUser?.user.id !== user.id || !user.stream) {
    throw new Error("Unauthorized");
  }
  return (
    <div className="w-full">
      <StreamPlayer
        stream={user.stream}
        user={user}
        isFollowing
      />
    </div>
  )
}

export default CreatorPage
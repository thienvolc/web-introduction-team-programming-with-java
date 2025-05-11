interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}
export function TeamMember({
  name,
  role,
  imageUrl,
  bio
}: TeamMemberProps) {
  return <div className="flex flex-col items-center text-center">
      <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
        <img src={imageUrl} alt={name} className="object-cover w-full h-full" />
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm text-muted-foreground mb-2">{role}</p>
      <p className="text-sm text-muted-foreground">{bio}</p>
    </div>;
}
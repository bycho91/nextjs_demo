const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <div>User Details of USER {id}</div>;
};

export default UserDetails;

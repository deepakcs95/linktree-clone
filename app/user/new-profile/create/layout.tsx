export default async function CreateLinkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full  min-h-screen flex flex-col items-center pt-28 gap-10">{children}</div>
  );
}

import Header from '../UI/organisms/Header';

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <div className="w-[100%] h-full dark:bg-Gary-900 bg-[#FFFFFF] dark:text-Gary-100 text-Gary-800 ">
        <Header />
        {children}
        </div>
      </div>
  );
}


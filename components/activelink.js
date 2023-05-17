import Link from 'next/link';

const ActiveLink = ({ router, href, children, ...props }) => {
  const isActive = router.pathname === href;

  return (
    <Link href={href} {...props}>
      <a className={`px-5 py-2 text-sm z-30 font-medium ${isActive ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500 dark:text-gray-400'}`}>
        {children}
      </a>
    </Link>
  );
};

export default ActiveLink;
import Link from 'next/link';

const MyCustom404Page = () => {
  return (
    <div
      style={{
        marginTop: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>404</h1>
      <h2>
        <Link href="/">
          <a style={{ color: 'blue', textDecoration: 'underline', fontSize: '16px' }}>
            Go To Home Page
          </a>
        </Link>
      </h2>
      <p>Sorry, the content you are looking for could not be found.</p>
    </div>
  );
};

export default MyCustom404Page;
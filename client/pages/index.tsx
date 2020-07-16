import Link from "next/link";

interface Props {}

const Index = (props: Props) => {
  return (
    <div className="flex justify-center items-center container mx-auto mt-20 p-4 xl:p-0">
      <div className="bg-white px-20 py-10 rounded-lg shadow-xl">
        <div className="flex lg:justify-center mb-6">
          <img src="images/cis_logo.png" alt="logo" width={400} />
        </div>
        {/* input username */}
        <label className="font-bold">Username</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full mt-1 mb-4"
          type="text"
          placeholder="6304062222222"
        />{" "}
        <br />
        {/* input password */}
        <label className="font-bold">Password</label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full mt-1"
          type="password"
          placeholder="*************"
        />
        <Link href="/main/task">
          <button className="w-full bg-red-800 mt-6 p-2 text-white font-bold rounded-lg hover:bg-red-900">
            SignIn
          </button>
        </Link>
        <p className="font-hairline mt-4 text-center">
          © Copyright 2019 - {new Date().getFullYear()} |{" "}
          <a
            className="text-red-800"
            target="_blank"
            href="http://thanawatgulati.com"
          >
            Thanawat Gulati
          </a>
        </p>
      </div>
    </div>
  );
};

export default Index;

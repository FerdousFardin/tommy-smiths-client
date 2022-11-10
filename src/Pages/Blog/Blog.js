import React from "react";

export const Blog = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 my-5">
        <div className="container px-6 py-10 mx-auto">
          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
              src="https://i.ytimg.com/vi/QwevGzVu_zk/maxresdefault.jpg"
              alt=""
            />

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <p className="text-sm text-blue-500 uppercase">Database</p>

              <a
                href="#"
                className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl"
              >
                What's The Difference between SQL and NoSQL ?
              </a>
              <table className="w-full mt-3 text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      SL
                    </th>
                    <th scope="col" className="px-6 py-3">
                      SQL
                    </th>
                    <th scope="col" className="px-6 py-3">
                      NoSQL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">1.</td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white "
                    >
                      RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                      Non-relational or distributed database system.
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">2.</td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white "
                    >
                      These databases have fixed or static or predefined schema{" "}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                      They have dynamic schema
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">3.</td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white "
                    >
                      These databases are not suited for hierarchical data
                      storage.{" "}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                      These databases are best suited for hierarchical data
                      storage.
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">4.</td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white "
                    >
                      These databases are best suited for complex queries{" "}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                      These databases are not so good for complex queries
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">5.</td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white "
                    >
                      Vertically Scalable{" "}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                      Horizontally scalable
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">6.</td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white "
                    >
                      Follows ACID property{" "}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                      Follows CAP(consistency, availability, partition
                      tolerance)
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex items-center mt-6">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src="https://lh3.googleusercontent.com/a/ALm5wu0h5xZnORlbPNDz6vs9zxBPEmyKmhJ8fPOTnu1zsA=s96-c"
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                    Ferdous Fardin
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Author
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 mb-5 container px-6 py-10 mx-auto">
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
            src="http://jwt.io/img/logo-asset.svg"
            alt=""
          />

          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <p className="text-sm text-blue-500 uppercase">json web token</p>

            <a
              href="#"
              className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl"
            >
              What is JWT, and how does it work?
            </a>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 md:text-sm">
              <strong>JWT</strong>, or JSON Web Token, is an open standard used
              to share security information between two parties — a client and a
              server. Each JWT contains encoded JSON objects, including a set of
              claims. JWTs are signed using a cryptographic algorithm to ensure
              that the claims cannot be altered after the token is issued.
            </p>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 md:text-sm">
              JWTs differ from other web tokens in that they contain a set of
              claims. Claims are used to transmit information between two
              parties. What these claims are depends on the use case at hand.
              For example, a claim may assert who issued the token, how long it
              is valid for, or what permissions the client has been granted. A
              JWT is a string made up of three parts, separated by dots (.), and
              serialized using base64. In the most common serialization format,
              compact serialization, the JWT looks something like this:
              xxxxx.yyyyy.zzzzz. <br />
              Once decoded, you will get two JSON strings: The{" "}
              <strong>header</strong> and the <strong>payload</strong>. The{" "}
              <strong>signature</strong>.
            </p>

            <div className="flex items-center mt-6">
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src="https://lh3.googleusercontent.com/a/ALm5wu0h5xZnORlbPNDz6vs9zxBPEmyKmhJ8fPOTnu1zsA=s96-c"
                alt=""
              />

              <div className="mx-4">
                <h1 className="text-sm text-gray-700 dark:text-gray-200">
                  Ferdous Fardin
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Author
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 container mb-5 px-6 py-10 mx-auto">
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
            src="https://blog.boot.dev/img/800/Nodejs-vs-Javascript-min.webp"
            alt=""
          />

          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <div className="flex gap-5">
              <p className="text-sm text-blue-500 uppercase">node.js</p>
              <p className="text-sm text-blue-500 uppercase">JavaScript</p>
            </div>

            <a
              href="#"
              className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl"
            >
              What is the difference between javascript and NodeJS?
            </a>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 md:text-sm">
              <strong>1.</strong> JavaScript is a lightweight, cross-platform,
              interpreted scripting programming language that is primarily used
              for client-side scripting. It's built into both Java and HTML. On
              the other hand, Node.js is a server-side scripting language based
              on the Google Chrome V8 engine. As a result, it's used to build
              network-centric applications. It is a distributed system that is
              used for data-intensive real-time applications. <br />
              <strong>2.</strong> JavaScript is a simple programming language
              that could be run in any browser that supports the JavaScript
              Engine. On the other hand, Node.js is a running environment or
              interpreter for the JavaScript programming language. It needs
              libraries that may be easily accessed from JavaScript programming
              to make it more useful. <br />
              <strong>3.</strong> JavaScript can run on any engine, including
              Firefox's Spider Monkey, Safari's JavaScript Core, and V8 (Google
              Chrome). As a result, JavaScript programming is very simple to
              create, and any running environment is equivalent to a proper
              browser. On the other hand, Node.js only supports the V8 engine,
              which is exclusive to Google Chrome. However, written JavaScript
              code can run in any environment, regardless of whether it supports
              the V8 engine. <br />
              <strong>4.</strong> A particular non-blocking task is needed to
              access any operating system. There are some basic objects in
              JavaScript, but they are all os-specific. For example, ActiveX
              Control is a Windows-only application. However, Node.js is granted
              the ability to run non-blocking tasks unique to the operating
              system from any JavaScript programming. There are no os-specific
              constants in it. Node.js is well-versed in creating a clear
              binding with the file system, allowing the developer to read and
              write to disk.
            </p>
            <a
              className="link-hover text-teal-accent-700 font-semibold"
              href="https://www.javatpoint.com/javascript-vs-nodejs"
              target={"_blank"}
            >
              Learn More
            </a>
            <div className="flex items-center mt-6">
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src="https://lh3.googleusercontent.com/a/ALm5wu0h5xZnORlbPNDz6vs9zxBPEmyKmhJ8fPOTnu1zsA=s96-c"
                alt=""
              />

              <div className="mx-4">
                <h1 className="text-sm text-gray-700 dark:text-gray-200">
                  Ferdous Fardin
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Author
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 container mb-5 px-6 py-10 mx-auto">
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
            src="https://i.stack.imgur.com/BTm1H.png"
            alt=""
          />

          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <p className="text-sm text-blue-500 uppercase">Node.js</p>

            <a
              href="#"
              className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl"
            >
              How does NodeJS handle multiple requests at the same time?
            </a>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 md:text-sm">
              NodeJS Web Server maintains a limited Thread Pool to provide
              services to client requests. Multiple clients make multiple
              requests to the NodeJS server. NodeJS receives these requests and
              places them into the EventQueue . NodeJS server has an internal
              component referred to as the EventLoop which is an infinite loop
              that receives requests and processes them. This EventLoop is
              single threaded. In other words, EventLoop is the listener for the
              EventQueue. So, we have an event queue where the requests are
              being placed and we have an event loop listening to these requests
              in the event queue. What happens next? The listener(the event
              loop) processes the request and if it is able to process the
              request without needing any blocking IO operations, then the event
              loop would itself process the request and sends the response back
              to the client by itself. If the current request uses blocking IO
              operations, the event loop sees whether there are threads
              available in the thread pool, picks up one thread from the thread
              pool and assigns the particular request to the picked thread. That
              thread does the blocking IO operations and sends the response back
              to the event loop and once the response gets to the event loop,
              the event loop sends the response back to the client.
            </p>

            <div className="flex items-center mt-6">
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src="https://lh3.googleusercontent.com/a/ALm5wu0h5xZnORlbPNDz6vs9zxBPEmyKmhJ8fPOTnu1zsA=s96-c"
                alt=""
              />

              <div className="mx-4">
                <h1 className="text-sm text-gray-700 dark:text-gray-200">
                  Ferdous Fardin
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Author
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

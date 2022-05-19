import React from "react";
import "./BlogPage.css";

const BlogPage = () => {
    return (
        <div className="container page">
            <div className="question__container">
                <h2 className="text-center">Frequently Asked Questions</h2>
                <details className="question">
                    <summary className="text-warning">
                        Difference between javascript and node js:{" "}
                    </summary>
                    <div className="mt-3">
                        <p>
                            <span className="fw-bold text-warning">
                                JavaScript:
                            </span>{" "}
                            Javascript is a Scripting language. It is mostly
                            abbreviated as JS. It can be said that Javascript is
                            the updated version of the ECMA script. Javascript
                            is a high-level programming language that uses the
                            concept of Oops but it is based on prototype
                            inheritance.
                            <br />
                            <span className="fw-bold text-warning">
                                Node js:
                            </span>{" "}
                            NodeJS is a cross-platform and opensource Javascript
                            runtime environment that allows the javascript to be
                            run on the server-side. Nodejs allows Javascript
                            code to run outside the browser. Nodejs comes with a
                            lot of modules and mostly used in web development.
                        </p>
                    </div>
                </details>

                <details className="question">
                    <summary className="text-warning">
                        When should we use NodeJS and when should we use
                        MongoDB?
                    </summary>
                    <div className="mt-3">
                        <p>
                            <span className="text-warning">Any</span> project
                            needs a programming environment and a runtime
                            library that offers you basic programming
                            tools/support and can compile and/or interpret your
                            code. Nodejs is such as tool for the Javascript
                            programming language. There are other similar tools
                            for other languages such as Python, Java, PHP, C#,
                            C++, Go, etc.
                            <br />
                            So, if you want to write some kind of stand-alone
                            program or server in Javascript, then you can use
                            nodejs for it.
                            <br />
                            <br />
                            <span className="text-warning">If</span> your
                            application needs the ability to persistently store
                            data in a way that you can efficiently query or
                            update it later, then you would typically use some
                            form of database. There are dozens of popular
                            databases. MongoDB is one such database. MariaDB,
                            MySql, CouchDB, DynamoDB (on AWS), Postgres are
                            examples of other databases. Different databases
                            have different strengths (things they are best at)
                            and different ways of using them so it's a whole
                            different question to choose the right/best database
                            for what you're doing.
                        </p>
                    </div>
                </details>

                <details className="question">
                    <summary className="text-warning">
                        Differences between sql and nosql databases.
                    </summary>
                    <div className="mt-3">
                        <p>
                            <span className="text-warning">SQL: </span>It is
                            also called RELATIONAL DATABASE MANAGEMENT SYSTEM
                            (RDBMS). These databases have fixed or static or
                            predefined schema. SQL databases are not suited for
                            hierarchical data storage. It is not possible to
                            store hierarchical data in a SQL database. SQL
                            databases are used to store data in a structured
                            way. These databases are best suited for complex
                            queries
                            <br />
                            <span className="text-warning">NoSQL: </span>
                            It is also called NON-RELATIONAL DATABASE
                            MANAGEMENT. These databases have dynamic schema.
                            NoSQL databases are suited for hierarchical data
                            storage. They are not suited for storing large
                            amount of data. They are suited for storing small
                            amount of data. These databases are not so good for
                            complex queries.
                        </p>
                    </div>
                </details>
                <details className="question">
                    <summary className="text-warning">
                        What is the purpose of jwt and how does it work?
                    </summary>
                    <div className="mt-3">
                        <p>
                            <span className="text-warning">JWT</span>, or JSON
                            Web Token, is an open standard used to share
                            security information between two parties — a client
                            and a server. Each JWT contains encoded JSON
                            objects, including a set of claims. JWTs are signed
                            using a cryptographic algorithm to ensure that the
                            claims cannot be altered after the token is issued.
                        </p>
                    </div>
                </details>
            </div>
        </div>
    );
};

export default BlogPage;

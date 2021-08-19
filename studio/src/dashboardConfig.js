export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "611deb0a66f2778938e88ac1",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-rgsbixfi",
                  apiId: "e9299d56-4cfd-4b10-9d9f-b5f921ad0e7b",
                },
                {
                  buildHookId: "611deb0a66f27793ffe88664",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-uhjg794m",
                  apiId: "cc6ef8c1-7841-4f19-ace5-810fe45cfab7",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Sergio0831/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-uhjg794m.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

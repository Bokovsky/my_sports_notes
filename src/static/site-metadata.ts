interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Sports Notes',
  siteUrl: 'https://sports.macondo.cc',
  logo: 'https://s2.loli.net/2024/11/30/WfSUYk2ERlOMt4o.png',
  description: 'My Sports Notes',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://blog.macondo.cc',
    },
  ],
};

export default data;

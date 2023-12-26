const staticData = {
  navbar: [
    { name: 'home', url: "/dashboard", mobileViewOrder: 'order-1' },
    { name: 'explore', url: "/dashboard/explore", mobileViewOrder: 'order-2' },
    { name: 'notifications', url: "/dashboard/notifications", mobileViewOrder: 'order-5' },
    { name: 'messages', url: "/dashboard/messages", mobileViewOrder: 'order-4' },
    { name: 'friends', url: "/dashboard/friends", mobileViewOrder: 'order-3' },
    { name: 'profile', url: "/dashboard/profile" },
  ],
  trendingList: [
    { title: 'Free Palestine', url: "/dashboard", postsQty: 31.3, location: 'Norway' },
    { title: 'Stop Genocide', url: "/dashboard", postsQty: 29.1, location: 'Germany' },
    { title: 'Premier League', url: "/dashboard", postsQty: 20.7, location: 'England' },
    { title: 'Winter Is Coming', url: "/dashboard", postsQty: 17.3, location: 'Norway' },
  ]
};

export default staticData;
// CommonData.js

// Sample user data
export const userData = {
    name: "Alex Johnson",
    avatar: "/api/placeholder/150/150",
    rating: 4.8,
    reviews: 42,
    enrolledCourses: 19,
    activeCourses: 3,
    completedCourses: 27,
    earnings: 2583.50,
    totalStudents: 146,
    totalCourses: 8,
    recentActivities: [
      { id: 1, type: "course_progress", title: "Advanced React Patterns", progress: 75, date: "2 hours ago" },
      { id: 2, type: "course_completed", title: "UI/UX Fundamentals", date: "Yesterday" },
      { id: 3, type: "review_received", title: "JavaScript Mastery", rating: 5, date: "2 days ago" },
    ],
    upcomingEvents: [
      { id: 1, title: "Live Workshop: Portfolio Building", date: "Tomorrow, 3:00 PM" },
      { id: 2, title: "Mentor Session: Career Guidance", date: "Apr 26, 2:00 PM" }
    ]
  };
  
  // Sample course data
  export const courses = [
    { id: 1, title: "Advanced React Patterns", students: 243, rating: 4.9, earnings: 1243.50, progress: 75, image: "/api/placeholder/80/60" },
    { id: 2, title: "UI/UX Fundamentals", students: 187, rating: 4.7, earnings: 876.25, progress: 100, image: "/api/placeholder/80/60" },
    { id: 3, title: "JavaScript Mastery", students: 324, rating: 4.8, earnings: 1512.75, progress: 62, image: "/api/placeholder/80/60" },
  ];
  
  // Sample notifications
  export const notifications = [
    { id: 1, type: "message", content: "Sarah left a comment on your course", time: "3 mins ago" },
    { id: 2, type: "enroll", content: "New enrollment in Advanced React Patterns", time: "1 hour ago" },
    { id: 3, type: "review", content: "You received a 5-star review!", time: "Yesterday" },
  ];
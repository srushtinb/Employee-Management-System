const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Submit project report",
          taskDescription: "Prepare and submit the Q2 project report",
          taskDate: "2025-06-20",
          category: "Documentation",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Client meeting",
          taskDescription: "Discuss requirements with client for new module",
          taskDate: "2025-06-22",
          category: "Meeting",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Fix login bug",
          taskDescription: "Resolve issue with login redirect on mobile",
          taskDate: "2025-06-18",
          category: "Development",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Design homepage banner",
          taskDescription: "Create a new banner for the upcoming sale",
          taskDate: "2025-06-15",
          category: "Design",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Team sync-up",
          taskDescription: "Weekly catch-up with design team",
          taskDate: "2025-06-14",
          category: "Meeting",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        },
        {
          taskTitle: "Prototype mobile app",
          taskDescription: "Develop prototype for new mobile app feature",
          taskDate: "2025-06-25",
          category: "Development",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Prepare presentation",
          taskDescription: "Slides for marketing strategy meeting",
          taskDate: "2025-06-19",
          category: "Documentation",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Security audit",
          taskDescription: "Perform security audit on user management module",
          taskDate: "2025-06-30",
          category: "Testing",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Fix API response delay",
          taskDescription: "Reduce response time for critical APIs",
          taskDate: "2025-06-28",
          category: "Development",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Database optimization",
          taskDescription: "Optimize queries for reporting module",
          taskDate: "2025-06-24",
          category: "Database",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Documentation review",
          taskDescription: "Review technical documentation of recent modules",
          taskDate: "2025-06-17",
          category: "Documentation",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "UI Testing",
          taskDescription: "Test UI responsiveness on all devices",
          taskDate: "2025-06-16",
          category: "Testing",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Prepare blog post",
          taskDescription: "Write blog post for product launch",
          taskDate: "2025-06-20",
          category: "Content",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Product demo",
          taskDescription: "Demo for new enterprise clients",
          taskDate: "2025-06-23",
          category: "Meeting",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Bug triage",
          taskDescription: "Categorize and assign bugs from QA",
          taskDate: "2025-06-19",
          category: "Testing",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Sprint planning",
          taskDescription: "Plan tasks for next development sprint",
          taskDate: "2025-06-21",
          category: "Planning",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Prepare sales report",
          taskDescription: "Compile last quarter sales figures",
          taskDate: "2025-06-18",
          category: "Reports",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Interview candidate",
          taskDescription: "Conduct technical interview for frontend developer",
          taskDate: "2025-06-26",
          category: "HR",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Social media posts",
          taskDescription: "Schedule posts for product announcement",
          taskDate: "2025-06-15",
          category: "Marketing",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];
  

  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  };
  

export const getLocalStorage =()=>{
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin= JSON.parse(localStorage.getItem('admin'))

   return(employees,admin)
}
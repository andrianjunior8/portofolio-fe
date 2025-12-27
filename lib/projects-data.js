// projects-data.js
// Dummy API Response untuk semua project

export const projectsData = {
  pos: {
    title: "Point of Sales",
    subtitle: "High-performance REST API handling 10k+ requests/min",
    description:
      "A comprehensive Point of Sales system built with modern tech stack to handle high-traffic retail operations. The system features real-time inventory management, payment processing, and advanced reporting capabilities.",
    tech: ["Golang", "MySQL", "Redis", "Next.js", "Docker", "Jenkins"],
    liveUrl: "",
    githubUrl: "",
    screenshots: [
      {
        url: "/screenshots/pos/dashboard.jpg",
        alt: "Dashboard Overview",
        caption: "Main dashboard with real-time analytics",
      },
      {
        url: "/screenshots/pos/products.jpg",
        alt: "Product Management",
        caption: "Product inventory management interface",
      },
      {
        url: "/screenshots/pos/checkout.jpg",
        alt: "Checkout Process",
        caption: "Fast and intuitive checkout system",
      },
    ],
    strengths: [
      {
        title: "High Performance",
        description:
          "Handles 10,000+ concurrent requests with sub-100ms response time",
      },
      {
        title: "Real-time Updates",
        description:
          "WebSocket integration for instant inventory and sales updates",
      },
      {
        title: "Scalable Architecture",
        description:
          "Microservices design allows horizontal scaling as business grows",
      },
      {
        title: "Advanced Caching",
        description: "Redis implementation reduces database load by 70%",
      },
      {
        title: "Comprehensive Reports",
        description: "Built-in analytics and reporting for business insights",
      },
      {
        title: "Secure Payment",
        description: "PCI-DSS compliant payment processing integration",
      },
    ],
    weaknesses: [
      {
        title: "Complex Setup",
        description:
          "Initial deployment requires technical expertise and infrastructure",
      },
      {
        title: "Learning Curve",
        description: "Staff training needed due to feature-rich interface",
      },
      {
        title: "Resource Intensive",
        description:
          "Requires dedicated server resources for optimal performance",
      },
      {
        title: "Limited Offline Mode",
        description:
          "Partial functionality when internet connection is unavailable",
      },
    ],
    features: [
      "Multi-store management",
      "Employee role management",
      "Customer loyalty program",
      "Inventory forecasting",
      "Barcode scanning",
      "Receipt customization",
    ],
  },

  "stock-opname": {
    title: "Stock Opname",
    subtitle: "Real-time inventory tracking and management system",
    description:
      "Advanced stock opname system with real-time data visualization built using Next.js and WebSocket technology. The application provides instant updates on inventory changes, automated discrepancy detection, and comprehensive audit trails for warehouse operations.",
    tech: ["Golang", "MySQL", "Next.js", "Docker", "Jenkins", "WebSocket"],
    liveUrl: "",
    githubUrl: "",
    screenshots: [
      {
        url: "/screenshots/stock-opname/inventory-dashboard.jpg",
        alt: "Inventory Dashboard",
        caption: "Real-time inventory tracking dashboard",
      },
      {
        url: "/screenshots/stock-opname/scan-interface.jpg",
        alt: "Scanning Interface",
        caption: "Barcode scanning and item verification",
      },
      {
        url: "/screenshots/stock-opname/reports.jpg",
        alt: "Audit Reports",
        caption: "Comprehensive audit and discrepancy reports",
      },
    ],
    strengths: [
      {
        title: "Real-time Synchronization",
        description:
          "WebSocket implementation ensures instant data updates across all devices",
      },
      {
        title: "Offline Support",
        description:
          "Works offline and syncs automatically when connection is restored",
      },
      {
        title: "Automated Discrepancy Detection",
        description:
          "AI-powered system identifies and flags inventory inconsistencies",
      },
      {
        title: "Multi-warehouse Support",
        description: "Manage stock opname across multiple warehouse locations",
      },
      {
        title: "Barcode Integration",
        description: "Fast scanning with support for multiple barcode formats",
      },
      {
        title: "Audit Trail",
        description: "Complete history of all inventory changes and updates",
      },
    ],
    weaknesses: [
      {
        title: "Network Dependency",
        description:
          "Real-time features require stable internet connection for optimal performance",
      },
      {
        title: "Initial Data Migration",
        description: "Migrating existing inventory data can be time-consuming",
      },
      {
        title: "Hardware Requirements",
        description: "Requires barcode scanners for full functionality",
      },
    ],
    features: [
      "Real-time inventory updates",
      "Barcode scanning",
      "Discrepancy tracking",
      "Multi-warehouse management",
      "Export to Excel/PDF",
      "Mobile-responsive interface",
      "Role-based access control",
    ],
  },

  bcm: {
    title: "Business Continuity Management",
    subtitle: "Enterprise-grade disaster recovery and risk management platform",
    description:
      "Comprehensive Business Continuity Management system designed to help organizations prepare for, respond to, and recover from disruptive events. Features distributed architecture with event-driven design for high availability and resilience.",
    tech: ["Golang", "Elastic Search", "Docker", "Jenkins"],
    liveUrl: "",
    githubUrl: "",
    screenshots: [
      {
        url: "/screenshots/bcm/dashboard.png",
        alt: "Risk Management Dashboard",
        caption: "Centralized risk assessment and monitoring",
      },
      {
        url: "/screenshots/bcm/incident-response.jpg",
        alt: "Incident Response",
        caption: "Real-time incident tracking and response management",
      },
      {
        url: "/screenshots/bcm/recovery-plans.jpg",
        alt: "Recovery Plans",
        caption: "Disaster recovery planning and documentation",
      },
    ],
    strengths: [
      {
        title: "Event-Driven Architecture",
        description:
          "Distributed system ensures high availability and fault tolerance",
      },
      {
        title: "Advanced Search",
        description:
          "Elastic Search integration provides fast and accurate document retrieval",
      },
      {
        title: "Automated Alerts",
        description:
          "Real-time notifications for critical incidents and threshold breaches",
      },
      {
        title: "Compliance Ready",
        description: "Built-in templates for ISO 22301 and other BCM standards",
      },
      {
        title: "Document Management",
        description:
          "Centralized repository for all business continuity documentation",
      },
    ],
    weaknesses: [
      {
        title: "Complex Configuration",
        description:
          "Requires extensive setup for organization-specific requirements",
      },
      {
        title: "Training Required",
        description: "Staff need comprehensive training on BCM best practices",
      },
      {
        title: "Resource Intensive",
        description:
          "Elasticsearch cluster requires significant server resources",
      },
    ],
    features: [
      "Risk assessment matrix",
      "Incident management",
      "Recovery time objectives (RTO)",
      "Business impact analysis (BIA)",
      "Emergency contact management",
      "Automated testing schedules",
      "Compliance reporting",
    ],
  },

  partner: {
    title: "Partner Management System",
    subtitle: "Comprehensive partner relationship and collaboration platform",
    description:
      "Enterprise partner management system integrating multiple data sources including SQL Server, Firebase, and Elasticsearch. The platform enables seamless collaboration, document sharing, and communication between business partners with real-time updates and advanced search capabilities.",
    tech: [
      "Golang",
      "SQL Server",
      "Firebase",
      "Elastic Search",
      "Docker",
      "Jenkins",
    ],
    liveUrl: "",
    githubUrl: "",
    screenshots: [
      {
        url: "/screenshots/partner/partner-dashboard.jpg",
        alt: "Partner Dashboard",
        caption: "Overview of all partner relationships and activities",
      },
      {
        url: "/screenshots/partner/collaboration.jpg",
        alt: "Collaboration Tools",
        caption: "Real-time messaging and document collaboration",
      },
      {
        url: "/screenshots/partner/analytics.jpg",
        alt: "Partner Analytics",
        caption: "Performance metrics and partnership analytics",
      },
    ],
    strengths: [
      {
        title: "Multi-Source Integration",
        description:
          "Seamlessly integrates data from SQL Server, Firebase, and Elasticsearch",
      },
      {
        title: "Real-time Collaboration",
        description:
          "Firebase integration enables instant messaging and notifications",
      },
      {
        title: "Advanced Search",
        description:
          "Elasticsearch powers fast partner and document search capabilities",
      },
      {
        title: "Document Management",
        description:
          "Centralized storage for contracts, agreements, and documents",
      },
      {
        title: "Performance Tracking",
        description:
          "Built-in analytics for monitoring partner performance metrics",
      },
    ],
    weaknesses: [
      {
        title: "Multiple Dependencies",
        description:
          "Integration with multiple services increases maintenance complexity",
      },
      {
        title: "Data Synchronization",
        description:
          "Keeping data consistent across SQL Server and Firebase requires careful handling",
      },
      {
        title: "Firebase Costs",
        description:
          "High-volume usage can lead to increased Firebase expenses",
      },
    ],
    features: [
      "Partner onboarding workflows",
      "Contract management",
      "Real-time messaging",
      "Document sharing",
      "Performance dashboards",
      "Notification system",
      "Advanced partner search",
      "Audit logs",
    ],
  },
  siteman: {
    title: "Sistem Informasi Temuan Eksternal",
    subtitle: "Comprehensive partner relationship and collaboration platform",
    description:
      "Enterprise partner management system integrating multiple data sources including SQL Server, Firebase, and Elasticsearch. The platform enables seamless collaboration, document sharing, and communication between business partners with real-time updates and advanced search capabilities.",
    tech: ["Golang", "SQL Server", "Elastic Search", "Docker", "Jenkins"],
    liveUrl: "",
    githubUrl: "",
    screenshots: [
      {
        url: "/screenshots/siteman/insert-findings.png",
        alt: "Partner Dashboard",
        caption: "Overview of all partner relationships and activities",
      },
      {
        url: "/screenshots/siteman/insert-recommendation.png",
        alt: "Collaboration Tools",
        caption: "Real-time messaging and document collaboration",
      },
      {
        url: "/screenshots/siteman/analytics.jpg",
        alt: "Partner Analytics",
        caption: "Performance metrics and partnership analytics",
      },
    ],
    strengths: [
      {
        title: "Multi-Source Integration",
        description:
          "Seamlessly integrates data from SQL Server, Firebase, and Elasticsearch",
      },
      {
        title: "Real-time Collaboration",
        description:
          "Firebase integration enables instant messaging and notifications",
      },
      {
        title: "Advanced Search",
        description:
          "Elasticsearch powers fast partner and document search capabilities",
      },
      {
        title: "Document Management",
        description:
          "Centralized storage for contracts, agreements, and documents",
      },
      {
        title: "Performance Tracking",
        description:
          "Built-in analytics for monitoring partner performance metrics",
      },
    ],
    weaknesses: [
      {
        title: "Multiple Dependencies",
        description:
          "Integration with multiple services increases maintenance complexity",
      },
      {
        title: "Data Synchronization",
        description:
          "Keeping data consistent across SQL Server and Firebase requires careful handling",
      },
      {
        title: "Firebase Costs",
        description:
          "High-volume usage can lead to increased Firebase expenses",
      },
    ],
    features: [
      "Partner onboarding workflows",
      "Contract management",
      "Real-time messaging",
      "Document sharing",
      "Performance dashboards",
      "Notification system",
      "Advanced partner search",
      "Audit logs",
    ],
  },

  "banking-middleware": {
    title: "Banking Middleware Integration",
    subtitle: "Secure payment processing and banking integration layer",
    description:
      "High-security banking middleware that acts as an integration layer between applications and banking systems. Built with Golang and Elasticsearch for fast transaction processing, logging, and audit trail management. Ensures PCI-DSS compliance and secure payment processing.",
    tech: ["Golang", "Elastic Search"],
    liveUrl: "",
    githubUrl: "",
    screenshots: [
      {
        url: "/screenshots/banking-middleware/transaction-monitor.jpg",
        alt: "Transaction Monitoring",
        caption: "Real-time transaction monitoring and status tracking",
      },
      {
        url: "/screenshots/banking-middleware/security-logs.jpg",
        alt: "Security & Audit Logs",
        caption: "Comprehensive security and audit logging system",
      },
      {
        url: "/screenshots/banking-middleware/api-dashboard.jpg",
        alt: "API Management",
        caption: "Banking API integration and management interface",
      },
    ],
    strengths: [
      {
        title: "High Security",
        description:
          "PCI-DSS compliant with end-to-end encryption and secure key management",
      },
      {
        title: "Fast Processing",
        description:
          "Handles thousands of concurrent transactions with low latency",
      },
      {
        title: "Comprehensive Logging",
        description:
          "Elasticsearch integration provides detailed transaction audit trails",
      },
      {
        title: "Multiple Bank Support",
        description:
          "Supports integration with various banking APIs and protocols",
      },
      {
        title: "Error Handling",
        description: "Robust retry mechanisms and error recovery procedures",
      },
    ],
    weaknesses: [
      {
        title: "Complex Compliance",
        description:
          "Requires ongoing compliance updates and security certifications",
      },
      {
        title: "Bank-Specific Integration",
        description:
          "Each bank integration requires custom implementation and testing",
      },
      {
        title: "High Stakes",
        description:
          "Financial transactions require extensive testing and validation",
      },
    ],
    features: [
      "Multi-bank API integration",
      "Transaction routing",
      "Real-time status updates",
      "Fraud detection hooks",
      "Transaction reconciliation",
      "Comprehensive audit logs",
      "Error notification system",
      "Performance monitoring",
    ],
  },

  logistics: {
    title: "Logistics Management System",
    subtitle: "End-to-end logistics and supply chain management platform",
    description:
      "Comprehensive logistics management system built with modern tech stack including Next.js, Golang, and MySQL. Features real-time tracking, warehouse management, route optimization, and integrated communication through WebSocket. Includes cloud storage integration for document management and proof of delivery.",
    tech: [
      "Next.js",
      "Golang",
      "MySQL",
      "Elastic Search",
      "WebSocket",
      "Redis",
      "Google Cloud Storage",
    ],
    liveUrl: "",
    githubUrl: "",
    screenshots: [
      {
        url: "/screenshots/logistics/tracking-dashboard.jpg",
        alt: "Shipment Tracking",
        caption: "Real-time shipment tracking and status monitoring",
      },
      {
        url: "/screenshots/logistics/warehouse-management.jpg",
        alt: "Warehouse Management",
        caption: "Inventory and warehouse operations management",
      },
      {
        url: "/screenshots/logistics/route-optimization.jpg",
        alt: "Route Optimization",
        caption: "Intelligent route planning and optimization",
      },
    ],
    strengths: [
      {
        title: "Real-time Tracking",
        description:
          "WebSocket integration provides live updates on shipment status and location",
      },
      {
        title: "Route Optimization",
        description:
          "AI-powered algorithms optimize delivery routes to reduce costs and time",
      },
      {
        title: "Cloud Storage",
        description:
          "Google Cloud Storage integration for documents, photos, and proof of delivery",
      },
      {
        title: "Fast Search",
        description:
          "Elasticsearch enables quick search across shipments, customers, and documents",
      },
      {
        title: "Scalable Architecture",
        description: "Redis caching ensures high performance under heavy load",
      },
      {
        title: "Mobile Responsive",
        description: "Next.js frontend works seamlessly on mobile devices",
      },
    ],
    weaknesses: [
      {
        title: "Complex Integration",
        description:
          "Multiple services require careful orchestration and monitoring",
      },
      {
        title: "Cloud Storage Costs",
        description:
          "Large volume of photos and documents can increase storage expenses",
      },
      {
        title: "Network Dependency",
        description:
          "Real-time features require stable internet connection for drivers",
      },
    ],
    features: [
      "Real-time shipment tracking",
      "Warehouse inventory management",
      "Route optimization",
      "Driver mobile app",
      "Proof of delivery with photos",
      "Customer notifications",
      "Document management",
      "Delivery scheduling",
      "Fleet management",
      "Analytics and reporting",
    ],
  },
};

// Function to get project by slug
export function getProjectBySlug(slug) {
  return projectsData[slug] || null;
}

// Function to get all project slugs
export function getAllProjectSlugs() {
  return Object.keys(projectsData);
}

import { getProjectBySlug } from "@/lib/projects-data";
import ProjectDetailClient from "./ProjectDetailClient";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Generate static params
export function generateStaticParams() {
  return [
    { slug: "pos" },
    { slug: "stock-opname" },
    { slug: "bcm" },
    { slug: "partner" },
    { slug: "banking-middleware" },
    { slug: "logistics" },
  ];
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  console.log("Slug:", params.slug);
  const project = getProjectBySlug(slug);
  console.log("Project:", project);

  // Handle project not found
  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">
            {`The project you're looking for doesn't exist.`}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return <ProjectDetailClient project={project} />;
}

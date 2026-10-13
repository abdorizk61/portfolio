"use client";

import { useState } from "react";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";
import { projects as structuredProjects, categoryFilters } from "@/data";
import type { ProjectCategory, ProjectData } from "@/data";

export interface ProjectItem {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    publishedAt: string;
    images: string[];
    tags?: string | string[];
    link?: string;
    liveDemo?: string;
    team?: Array<{
      name: string;
      role: string;
      avatar: string;
      linkedIn: string;
    }>;
  };
  content?: string;
}

interface ProjectsProps {
  posts?: ProjectItem[];
  range?: [number, number?];
  exclude?: string[];
  /** Whether to show category filter pills (defaults to true) */
  showFilters?: boolean;
}

export function Projects({ posts = [], range, exclude, showFilters = true }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all");

  let allProjects = [...posts];

  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  // Find structured metadata for each post
  const findProjectData = (slug: string): ProjectData | undefined =>
    structuredProjects.find((p) => p.slug === slug);

  // Apply category filter using structured project module
  const filteredProjects =
    activeFilter === "all"
      ? displayedProjects
      : displayedProjects.filter((post) => {
          const structured = findProjectData(post.slug);
          return structured?.category === activeFilter;
        });

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {/* Category Filter Tabs */}
      {showFilters && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
            padding: "8px 0 16px 0",
            width: "100%",
          }}
        >
          {categoryFilters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              className="filter-pill"
              data-active={activeFilter === filter.key ? "true" : "false"}
              onClick={() => setActiveFilter(filter.key as ProjectCategory | "all")}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}

      {/* Projects List */}
      {filteredProjects.map((post, index) => {
        const rawTags: unknown = post.metadata.tags;
        const tags: string[] = Array.isArray(rawTags)
          ? rawTags.map(String)
          : typeof rawTags === "string" && rawTags.trim()
            ? rawTags
                .split(",")
                .map((t) => t.trim())
                .filter(Boolean)
            : [];

        return (
          <ProjectCard
            priority={index < 2}
            key={post.slug}
            href={`/work/${post.slug}`}
            images={post.metadata.images || []}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content || ""}
            avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
            link={post.metadata.link || ""}
            liveDemo={post.metadata.liveDemo || ""}
            tags={tags}
            index={index}
            projectData={findProjectData(post.slug)}
          />
        );
      })}

      {filteredProjects.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "54px 24px",
            color: "#94a3b8",
            fontFamily: "var(--font-code, monospace)",
            fontSize: "0.9rem",
            background: "rgba(13, 17, 23, 0.5)",
            borderRadius: "12px",
            border: "1px dashed rgba(255, 255, 255, 0.1)",
          }}
        >
          [SYSTEM] No projects detected under the selected filter category.
        </div>
      )}
    </Column>
  );
}

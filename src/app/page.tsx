import { Heading, Text, RevealFx, Column, Row, Schema, Meta, Line } from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp, InteractiveTerminal, HeroSection } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="l" gap="xl" paddingY="12" horizontal="center" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* ── Matrix SOC Hero Section ── */}
      <RevealFx fillWidth>
        <HeroSection />
      </RevealFx>

      {/* ── Featured Projects Section ── */}
      <div id="projects" style={{ width: "100%", scrollMarginTop: "80px" }}>
        <RevealFx translateY="16" delay={0.2} fillWidth>
          <Projects range={[1, 1]} />
        </RevealFx>
      </div>

      {/* ── Interactive Shell Section ── */}
      <div id="terminal" style={{ width: "100%", scrollMarginTop: "80px" }}>
        <RevealFx translateY="16" delay={0.3} fillWidth>
          <Column fillWidth gap="20">
            {/* Section header */}
            <Column fillWidth gap="4">
              <Row fillWidth vertical="center" gap="12">
                <Heading as="h2" variant="heading-strong-l" style={{ color: "#ffffff" }}>
                  Terminal
                </Heading>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "2px 8px",
                    border: "1px solid rgba(0, 255, 65, 0.4)",
                    backgroundColor: "rgba(0, 255, 65, 0.08)",
                    color: "#00FF41",
                    fontFamily: "var(--font-code, monospace)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.08em",
                    borderRadius: "2px",
                    boxShadow: "0 0 8px rgba(0, 255, 65, 0.25)",
                  }}
                >
                  interactive
                </span>
              </Row>
              <Text onBackground="neutral-weak" variant="body-default-s">
                A live CLI — type{" "}
                <Text
                  as="span"
                  style={{
                    color: "#00FF41",
                    fontFamily: "var(--font-code, monospace)",
                    fontWeight: 700,
                  }}
                  variant="label-default-s"
                >
                  help
                </Text>{" "}
                to get started, or click any chip below the terminal.
              </Text>
            </Column>

            <InteractiveTerminal />
          </Column>
        </RevealFx>
      </div>

      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}

      {/* ── Additional Projects ── */}
      <RevealFx translateY="16" delay={0.4} fillWidth>
        <Projects range={[2]} />
      </RevealFx>

      {/* ── Contact Section ── */}
      <div id="contact" style={{ width: "100%", scrollMarginTop: "80px" }}>
        <Mailchimp />
      </div>
    </Column>
  );
}

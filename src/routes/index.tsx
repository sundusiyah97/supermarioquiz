import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mario Adventure Quiz - Game Edukasi Platformer 2D" },
      {
        name: "description",
        content: "Game edukasi platformer 2D bergaya Mario dengan kuis Kurikulum Merdeka untuk SD kelas 1-6.",
      },
      { property: "og:title", content: "Mario Adventure Quiz - Game Edukasi Platformer 2D" },
      {
        property: "og:description",
        content: "Lompat, kumpulkan koin, dan jawab soal kuis SD kelas 1-6 dalam petualangan retro.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/game/index.html"
      title="Mario Adventure Quiz"
      allow="autoplay; fullscreen"
      className="fixed inset-0 h-full w-full border-0"
    />
  );
}

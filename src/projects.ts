// Web-optimised images live in src/assets/projects/<slug>/, generated from each
// project's "SMALL SIZE" folder. They are shown in alphabetical order (1_a, 1_b, …).
const files = import.meta.glob<string>('./assets/projects/*/*.webp', {
  eager: true,
  import: 'default',
})

export type Project = {
  slug: string
  title: string
  subtitle: string
  details: string[]
  images: string[]
}

type ProjectInfo = Omit<Project, 'images'>;

const info: ProjectInfo[] = [
  {
    slug: 'whats-behind',
    title: "What's behind?",
    subtitle: 'Festival Model - Barcelona',
    details: ['Competition', 'January 2020', 'Temple - Barcelona'],
  },
  {
    slug: 'lake-chapel',
    title: 'Lake Chapel',
    subtitle: 'Competition - San Giovanni',
    details: ['Competition', 'San Giovanni'],
  },
  {
    slug: 'mutualism',
    title: 'Mutualism',
    subtitle: 'Competition, Eibar - Spain',
    details: ['Competition', 'Eibar - Spain'],
  },
  {
    slug: 'chiesa-diruta',
    title: 'Chiesa Diruta',
    subtitle: 'Competition, Grottolea - Italy',
    details: ['Competition', 'Grottolea - Italy'],
  },
]

function imagesFor(slug: string) {
  return Object.keys(files)
    .filter((path) => path.split('/').at(-2) === slug)
    .sort((a, b) => a.localeCompare(b))
    .map((path) => ({ name: path.split('/').at(-1)!.replace(/\.webp$/, ''), url: files[path] }))
}

export const projects: Project[] = info.map((p) => {
  const images = imagesFor(p.slug)
  return { 
    ...p,
     images: images.map((img) => img.url)
    }
})

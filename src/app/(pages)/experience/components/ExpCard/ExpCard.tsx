import { BsBank2 } from 'react-icons/bs';
import { TechBadges } from '@/constants/TechBadges';
import TechBadge from '@/app/(pages)/techstack/components/TechBadge';
import { JdItem } from '@/api/models/JdItem';
import dayjs from 'dayjs';

interface ExpCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  date: string;
  tags?: string[];
  jds: JdItem[];
}

const techTools = [
  'Angular',
  'SpringFramework',
  'RDBMS',
  'Jenkins',
  'GitLab',
  'Nx',
  'ESLint',
  'Sonarlint',
];

const techCores = ['JavaScript', 'TypeScript', 'CSS', 'HTML', 'Sass', 'Java'];

export default function ExpCard({ title, jds }: ExpCardProps) {
  return (
    <>
      <div className="liquid-wrapper flex flex-wrap rounded-xl">
        <section className="p-8 sm:flex-2">
          <div className="flex flex-col gap-4 border-b-1 p-6 py-4 pb-8 sm:flex-row">
            <div className="hidden sm:block">
              <div className="w-fit rounded-xl bg-gradient-to-b from-cyan-100 to-blue-100 p-4">
                <BsBank2 size={32} />
              </div>
            </div>
            <div className="">
              <h1 className="text-2xl">{title}</h1>
              <h2 className="text-lg">Commercial Bank · Internal Web Systems</h2>
            </div>
            <div className="ml-auto">
              <div className="rounded-lg border-1 border-slate-300 bg-slate-100 p-1 px-2.5 text-nowrap">
                {dayjs('2022-08').format('YYYY-MM')} ~ Present
              </div>
            </div>
          </div>
          <div className="p-8">
            <ul className="col-span-2 list-inside list-disc text-gray-700 sm:col-start-2">
              {jds.map((jd, index) => (
                <>
                  <li key={index} className="">
                    <dt className="inline font-semibold">{jd.item}</dt>
                    <dd className="">{jd.description}</dd>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </section>

        <section className="w-full bg-slate-500/10 p-8 sm:flex-1">
          <div className="">
            <div className="mb-4">
              <div className="mb-2 border-b-1 py-4 text-xl font-semibold">Tech Tools</div>
              <div className="flex flex-wrap gap-1">
                {techTools.map((tool, index) => (
                  <TechBadge key={index} title={tool} {...TechBadges.get(tool)!} />
                ))}
              </div>
            </div>
            <div>
              <div className="mb-2 border-b-1 py-4 text-xl font-semibold">Tech Cores</div>
              <div className="flex flex-wrap gap-1">
                {techCores.map((core, index) => (
                  <TechBadge key={index} title={core} {...TechBadges.get(core)!} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

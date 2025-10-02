"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function EssayContent() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([])
  const imagesRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    imagesRef.current.forEach((image) => {
      if (image) observer.observe(image)
    })

    const handleScroll = () => {
      const scrolled = window.scrollY
      imagesRef.current.forEach((image, index) => {
        if (image) {
          const speed = 0.5
          const yPos = -(scrolled * speed * (index % 2 === 0 ? 1 : 0.7))
          image.style.transform = `translateY(${yPos}px)`
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <article className="prose prose-lg max-w-none">
      <div
        ref={(el) => {
          imagesRef.current[0] = el
        }}
        className="relative w-full h-[500px] -mx-4 mb-16 overflow-hidden rounded-lg opacity-0"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jose-rizal-portrait-formal-photograph-1890s-sepia--ksG0hfC210uVJ8HKvCDJVjHB4j2Awf.jpg"
          alt="José Rizal formal portrait"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <section
        id="introduction"
        className="scroll-mt-32 mb-12 opacity-0"
        ref={(el) => {
          sectionsRef.current[0] = el
        }}
      >
        <h2 className="text-3xl font-bold text-primary mb-6">I. Introduction</h2>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">A. Brief overview of José Rizal</h3>
        <p className="leading-relaxed text-foreground/90 mb-4">
          José Protacio Rizal (June 19, 1861 – December 30, 1896) was a Filipino physician, novelist, essayist,
          linguist, and reform advocate whose writings and life inspired the Philippine nationalist movement. He
          authored <em>Noli Me Tángere</em> (1887) and <em>El Filibusterismo</em> (1891), founded the Liga Filipina,
          practiced medicine, taught, and performed scientific and artistic work while advocating peaceful reform of
          Spanish colonial rule.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">B. Thesis statement</h3>
        <p className="leading-relaxed text-foreground/90 mb-4">
          Rizal's character and emergence as a national hero were shaped by an interplay of biological inheritance,
          formative environments (family, education, and the colonial context), pivotal life experiences (study abroad,
          exile in Dapitan, arrest and execution), and continuous moral reflection—producing a thinker who combined
          intellectual courage with pragmatic reformism.
        </p>
      </section>

      <section
        id="biological"
        className="scroll-mt-32 mb-12 opacity-0"
        ref={(el) => {
          sectionsRef.current[1] = el
        }}
      >
        <h2 className="text-3xl font-bold text-primary mb-6">II. Biological Factors</h2>

        <div
          ref={(el) => {
            imagesRef.current[1] = el
          }}
          className="relative float-right w-full md:w-1/2 h-[400px] ml-0 md:ml-8 mb-6 overflow-hidden rounded-lg opacity-0"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/young-jose-rizal-as-a-child-student-in-ateneo-unif-WGw0cPHpD6gckQ0xTUp5A5WL06s4tU.jpg"
            alt="Young José Rizal"
            fill
            className="object-cover"
          />
        </div>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">A. Inherited traits</h3>
        <p className="leading-relaxed text-foreground/90 mb-4">
          Rizal came from a mestizo family with Chinese, Tagalog, Spanish, and possibly Japanese ancestors. His family's
          mixed ancestry and the social standing that flowed from it helped shape early opportunities—access to
          education and networks—while also subjecting him to the social complexities of colonial hierarchy.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
          B. Physical characteristics and their impact
        </h3>
        <p className="leading-relaxed text-foreground/90 mb-4">
          Contemporary descriptions note Rizal's intelligence, good health in youth, and precocious development (reading
          and writing at a young age). His physical stamina and robust constitution supported extensive travel, study,
          and sustained intellectual output—factors that enabled his prolific writing and activism. (Biographical
          accounts record his active life as a physician, traveler, and polymath.)
        </p>
      </section>

      <section
        id="environmental"
        className="scroll-mt-32 mb-12 opacity-0 clear-both"
        ref={(el) => {
          sectionsRef.current[2] = el
        }}
      >
        <h2 className="text-3xl font-bold text-primary mb-6">III. Environmental Factors</h2>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">A. Family background and upbringing</h3>
        <p className="leading-relaxed text-foreground/90 mb-4">
          Rizal was the seventh of eleven children of Francisco Mercado and Teodora Alonso. His mother was a strong
          intellectual influence (tutoring him early), and his brother Paciano later guided his political orientation.
          The family emphasized learning, piety, and civic duty—foundations for Rizal's moral seriousness and literary
          ambitions.
        </p>

        <div
          ref={(el) => {
            imagesRef.current[2] = el
          }}
          className="relative w-full h-[350px] my-8 overflow-hidden rounded-lg opacity-0"
        >
          <Image
            src="rizal-ancestral-house-in-calamba-laguna-philippine.jpg"
            alt="Rizal ancestral home in Calamba"
            fill
            className="object-cover"
          />
        </div>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">B. Educational experiences</h3>
        <p className="leading-relaxed text-foreground/90 mb-4">
          Rizal's formal education at Ateneo Municipal de Manila and the University of Santo Tomas, followed by medical
          and liberal studies in Madrid and other European universities, broadened his intellectual horizons: exposure
          to Enlightenment ideas, liberal nationalism, modern science, and European literary traditions directly shaped
          his reformist critique and literary style. His multilingual ability and scholarly training underpinned both
          his reform arguments and his capacity to communicate them widely.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
          C. Social and political context of the Philippines
        </h3>
        <p className="leading-relaxed text-foreground/90 mb-4">
          Late 19th-century Philippines was marked by colonial inequalities, friar dominance, and limited political
          representation—conditions Rizal analyzed and dramatized in his novels. The wider Propaganda Movement of
          Filipino expatriates seeking reform set the intellectual and political stage for Rizal's writings and eventual
          martyrdom.
        </p>
      </section>

      <section
        id="experiences"
        className="scroll-mt-32 mb-12 opacity-0"
        ref={(el) => {
          sectionsRef.current[3] = el
        }}
      >
        <h2 className="text-3xl font-bold text-primary mb-6">IV. Life Experiences</h2>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">A. Experiences Abroad</h3>

        <div
          ref={(el) => {
            imagesRef.current[3] = el
          }}
          className="relative float-left w-full md:w-1/2 h-[400px] mr-0 md:mr-8 mb-6 overflow-hidden rounded-lg opacity-0"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jose-rizal-in-europe-madrid-spain-1880s-studying-w-XlSZbwkuTtFCk9hBWXIh1SYOZRK5xN.jpg"
            alt="Rizal studying in Europe"
            fill
            className="object-cover"
          />
        </div>

        <p className="leading-relaxed text-foreground/90 mb-4">
          In Europe Rizal encountered liberal political thought, scientific methods, and networks of reform-minded
          Filipino expatriates. He published his major novels there, used European presses to criticize colonial abuses,
          and participated in the Propaganda Movement—experiences that sharpened his arguments for peaceful reform and
          gave his writings international reach.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">B. Life in Dapitan</h3>
        <p className="leading-relaxed text-foreground/90 mb-4">
          Exiled to Dapitan (1892–1896), Rizal lived as a community physician, teacher, and farmer. He built a school,
          practiced medicine for the poor, and engaged in local engineering and scientific projects. Dapitan revealed a
          practical, service-oriented side of his character: applying knowledge to improve daily life and modeling civic
          leadership in a small community.
        </p>

        <div
          ref={(el) => {
            imagesRef.current[4] = el
          }}
          className="relative w-full h-[400px] my-8 overflow-hidden rounded-lg opacity-0 clear-both"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rizal-in-dapitan-exile-teaching-students-community.jpg-npCcTA6AcLUM41FmytUrXTo48XQdG9.webp"
            alt="Rizal's life in Dapitan"
            fill
            className="object-cover"
          />
        </div>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">C. Rizal's Arrest, Trial, and Execution</h3>
        <p className="leading-relaxed text-foreground/90 mb-4">
          Despite advocating nonviolent reform, Rizal was arrested, tried by Spanish authorities, and executed by firing
          squad on December 30, 1896—an event that transformed him from reformer to martyr and galvanized broader
          support for independence. His trial and execution remain central to his heroic image.
        </p>
      </section>

      <section
        id="character"
        className="scroll-mt-32 mb-12 opacity-0"
        ref={(el) => {
          sectionsRef.current[4] = el
        }}
      >
        <h2 className="text-3xl font-bold text-primary mb-6">V. Character Analysis</h2>

        <div
          ref={(el) => {
            imagesRef.current[5] = el
          }}
          className="relative float-right w-full md:w-1/2 h-[400px] ml-0 md:ml-8 mb-6 overflow-hidden rounded-lg opacity-0"
        >
          <Image
            src="jose-rizal-writing-noli-me-tangere-el-filibusteris.jpg"
            alt="Rizal writing his novels"
            fill
            className="object-cover"
          />
        </div>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">A. Rizal's Virtues and strengths</h3>
        <ul className="list-disc pl-6 space-y-2 text-foreground/90 mb-4">
          <li>
            <strong>Intellectual rigor:</strong> scholar, polyglot, physician, and author who used evidence and
            narrative to expose injustice.
          </li>
          <li>
            <strong>Moral courage:</strong> willingness to criticize entrenched powers and accept personal risk.
          </li>
          <li>
            <strong>Public service orientation:</strong> medical practice, education initiatives, and community projects
            in Dapitan.
          </li>
          <li>
            <strong>Empathy and humanism:</strong> literary portrayals show a deep sympathy for Filipino suffering and a
            commitment to human dignity.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">B. Rizal's Shortcomings and weaknesses</h3>
        <p className="leading-relaxed text-foreground/90 mb-4">
          <strong>Reluctance toward armed revolt:</strong> some contemporaries criticized him for opposing violent
          uprising, arguing his caution slowed radical change.
        </p>
        <p className="leading-relaxed text-foreground/90 mb-4">
          <strong>Elitist tendencies:</strong> as an ilustrado, he sometimes relied on elite networks and Eurocentric
          frameworks that have led later critics to debate how representative his views were of all Filipinos. These
          tensions complicate his legacy.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">C. Rizal's Evolution of character over time</h3>
        <p className="leading-relaxed text-foreground/90 mb-4">
          Rizal matured from a precocious student into an internationally educated reformer who increasingly combined
          literary critique with direct civic action (e.g., institutions he built in Dapitan). His final years show a
          synthesis of thought and practice—intellectual protest paired with community service—culminating in a moral
          stance that accepted personal sacrifice.
        </p>
      </section>

      <section
        id="pitfalls"
        className="scroll-mt-32 mb-12 opacity-0 clear-both"
        ref={(el) => {
          sectionsRef.current[5] = el
        }}
      >
        <h2 className="text-3xl font-bold text-primary mb-6">VI. Pitfalls and Heroism</h2>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">A. Challenges and obstacles faced by Rizal</h3>
        <p className="leading-relaxed text-foreground/90 mb-4">
          Rizal confronted colonial censorship, arrest, exile, familial burdens, and social suspicion from both Spanish
          authorities and radical revolutionaries. He also navigated cultural tensions (religion, mestizo identity,
          European ideas vs. local realities). These obstacles tested his convictions and sharpened his methods.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
          B. How these contributed to Rizal's heroic acts
        </h3>
        <p className="leading-relaxed text-foreground/90 mb-4">
          Adversity focused Rizal's energies into writings that exposed structural injustices and into community work
          that demonstrated principled leadership. His martyrdom—execution after a controversial trial—converted
          scholarly dissent into national inspiration, making his intellectual and moral example a rallying point for
          later independence efforts.
        </p>

        <div
          ref={(el) => {
            imagesRef.current[6] = el
          }}
          className="relative w-full h-[450px] my-8 overflow-hidden rounded-lg opacity-0"
        >
          <Image
            src="rizal-monument-luneta-park-manila-execution-site-m.jpg"
            alt="Rizal Monument at Luneta Park"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section
        id="conclusion"
        className="scroll-mt-32 mb-12 opacity-0"
        ref={(el) => {
          sectionsRef.current[6] = el
        }}
      >
        <h2 className="text-3xl font-bold text-primary mb-6">VII. Conclusion</h2>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">A. Summary of findings</h3>
        <p className="leading-relaxed text-foreground/90 mb-4">
          José Rizal's character and heroism were not the product of a single cause but of layered influences: inherited
          background, rigorous education, familial encouragement, exposure to European liberal thought, practical
          service in exile, and the crucible of colonial repression. Together these produced a reformer whose intellect,
          empathy, and sacrifice continue to shape Filipino national identity.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">B. Reflection on Rizal's legacy</h3>
        <p className="leading-relaxed text-foreground/90 mb-4">
          Rizal remains a complex symbol—a moral exemplar, a contested national hero, and a deeply human figure whose
          life invites reflection about the roles of intellect, civic service, and sacrifice in social change. His works
          and life continue to be studied and commemorated in the Philippines and abroad as lessons in conscience, civic
          responsibility, and the costs of colonial injustice.
        </p>

        <div
          ref={(el) => {
            imagesRef.current[7] = el
          }}
          className="relative w-full h-[400px] mt-8 overflow-hidden rounded-lg opacity-0"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jose-rizal-legacy-philippine-flag-national-hero-tr-egAowqwL3FIPR0YuictxJ6nnl4uNt3.jpg"
            alt="Rizal's enduring legacy"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section
        id="references"
        className="scroll-mt-32 mb-12 bg-secondary/30 p-6 rounded-lg opacity-0"
        ref={(el) => {
          sectionsRef.current[7] = el
        }}
      >
        <h2 className="text-3xl font-bold text-primary mb-6">References (open-source)</h2>
        <ul className="space-y-3 text-foreground/90">
          <li>
            <strong>National Historical Commission of the Philippines</strong> — José Rizal registry and markers.
            <a
              href="https://philhistoricsites.nhcp.gov.ph"
              className="text-accent hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              philhistoricsites.nhcp.gov.ph
            </a>
          </li>
          <li>
            <strong>Encyclopaedia Britannica</strong> — "José Rizal" (biography and context).
            <a
              href="https://www.britannica.com"
              className="text-accent hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Encyclopedia Britannica
            </a>
          </li>
          <li>
            <strong>José Rizal Shrine / Dapitan City</strong> and NHCP museum pages (Rizal in Dapitan).
            <a
              href="https://dapitancity.gov.ph"
              className="text-accent hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              dapitancity.gov.ph
            </a>
          </li>
          <li>
            <strong>Primary texts and scholarly analysis</strong> — <em>Noli Me Tángere</em> and{" "}
            <em>El Filibusterismo</em> analyses and PDFs (university-hosted copies and literary criticism).
            <a
              href="https://home.uchicago.edu"
              className="text-accent hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              home.uchicago.edu
            </a>
          </li>
          <li>
            <strong>Background on the Propaganda Movement</strong> and the Philippine Revolution (Britannica).
            <a
              href="https://www.britannica.com"
              className="text-accent hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Encyclopedia Britannica
            </a>
          </li>
        </ul>
      </section>
    </article>
  )
}

const team = [
  's.andra juan sánchez',
  'y.annick marquès schröder',
  'g.uillem florit bosch',
  'm.arina gracia montaner',
]

export default function Contact() {
  return (
    <>
      <h1 className="section-title">Contact</h1>
      <div className="contact">
        <div className="contact-details">
          <p className="contact-follow">
            follow us!
            <a
              href="https://www.instagram.com/sygma.studio/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="sygma.studio on Instagram"
            >
              <svg
                className="instagram-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5.5" />
                <circle cx="12" cy="12" r="4.5" />
                <circle cx="17.6" cy="6.4" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </p>
          <p>
            <a href="mailto:sygmarchstudio@gmail.com">sygmarchstudio@gmail.com</a>
          </p>
          <p>
            <a href="tel:+34681289257">+34 681 28 92 57</a>
          </p>
          <ul className="contact-team">
            {team.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

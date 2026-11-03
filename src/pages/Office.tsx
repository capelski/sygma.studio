import officePhoto from '../assets/office.jpg'

export default function Office() {
  return (
    <>
      <h1 className="section-title">Office</h1>
      <div className="office">
        <img
          className="office-photo"
          src={officePhoto}
          alt="The sygma.studio team in a glass conservatory"
          width={1066}
          height={1600}
        />
        <p className="office-text">
          sygm<b>a</b>.studio is an architectural research based on traditional architecture that
          aims to explore the relationship between art, space, inhabitant, experience, object, and
          details.
        </p>
      </div>
    </>
  )
}

import Title from './Title'
import { services } from '../data'

function Services() {
  return (
    <section className="section services" id="services">
      <Title title1="our" title2="Services" />

      <div className="section-center services-center">
        {services.map((index) => {
          const { id, icon, title, text } = index
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Services

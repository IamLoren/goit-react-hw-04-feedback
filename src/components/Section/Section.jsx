
export const Section = ({title, children}) => {
  
        return (
        <section>
            <h2 className="section">{title}</h2>
            {children}
        </section>)
}
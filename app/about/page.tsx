import PrimaryLayout from '../components/layouts/primary/PrimaryLayout'
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout'
import { NextPageWithLayout } from '../pages'

const About: NextPageWithLayout = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <h2>Layout Example</h2>
      <p>Random text for the example</p>
      <p>More stuff for kicks and giggles</p>
      <p>
        lsdjflkdsjflkdsjflksdjfkjdsfkjdsklfjslkfjlsdkjflksdjflksjlkdsjflksdjlfksdkfjsdlkfjlsdkjflskdjflsdkjflksdjflsdkjfsdlkfj
      </p>
    </section>
  )
}

export default About

About.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout>{page}</SidebarLayout>
    </PrimaryLayout>
  )
}

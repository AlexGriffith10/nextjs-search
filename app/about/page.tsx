import PrimaryLayout from '../components/layouts/primary/PrimaryLayout'
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout'
import { NextPageWithLayout } from '../pages'

const About: NextPageWithLayout = () => {
  return (
    <section>
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

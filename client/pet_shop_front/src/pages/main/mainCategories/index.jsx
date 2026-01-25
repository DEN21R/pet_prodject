import PageContainer from '../../../ui/pageContainer'
import TitleWithAction from '../../../ui/TitleWithAction'

function MainCategories() {
  return (
    <PageContainer>
      <TitleWithAction
        title="Categories"
        nav="/categories"
        btnText="All categories"
      />
    </PageContainer>
  )
}
export default MainCategories

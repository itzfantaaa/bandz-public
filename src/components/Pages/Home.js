import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { AppContent } from '../Layout'

const Home = () => {
  return (
<div className="container-login100">
  <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
      <script src="https://cdn.snipcart.com/themes/v3.0.20/default/snipcart.js" id="snipcart" data-api-key="ZjJjNTljMmUtMDg1Yi00MGRhLWFhNDQtZWJjMjk2MjgwN2Y5NjM3MzQwNjE3NjM2MDI4NDM1"></script>
      <link href="https://cdn.snipcart.com/themes/v3.0.20/default/snipcart.css" type="text/css" rel="stylesheet" />
    </Helmet>
    

      <AppContent>
        <h1>Here's the App Home Page</h1>
        <p>
          Since you are now logged in, view your profile: <Link to="/profile">View profile</Link>
        </p>
        <p>
          This starter was built using AWS Amplify. Try it out:{' '}
          <a href="https://console.amplify.aws">AWS Amplify</a>
        </p>
        
        <button class="snipcart-add-item" data-item-id="6" data-item-price="5.00" data-item-url="/products.json" data-item-description="Yo" data-item-image="" data-item-name="Silver Jays 10's"> Silver Jays 10's </button>

        <button class="snipcart-add-item" data-item-id="6" data-item-price="5.00" data-item-url="/products.json" data-item-description="Yo" data-item-image="" data-item-name="Silver Jays 10's"> Silver Jays 10's </button>

        <button class="snipcart-add-item" data-item-id="6" data-item-price="5.00" data-item-url="/products.json" data-item-description="Yo" data-item-image="" data-item-name="Silver Jays 10's"> Silver Jays 10's </button>

        <button class="snipcart-add-item" data-item-id="6" data-item-price="5.00" data-item-url="/products.json" data-item-description="Yo" data-item-image="" data-item-name="Silver Jays 10's"> Silver Jays 10's </button>

        <button class="snipcart-add-item" data-item-id="6" data-item-price="5.00" data-item-url="/products.json" data-item-description="Yo" data-item-image="" data-item-name="Silver Jays 10's"> Silver Jays 10's </button>

        <button class="snipcart-add-item" data-item-id="6" data-item-price="5.00" data-item-url="/products.json" data-item-description="Yo" data-item-image="" data-item-name="Silver Jays 10's"> Silver Jays 10's </button>

      </AppContent>
    </div>
  )
}

export default Home

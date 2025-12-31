import React from 'react';
import "./ResEng.css"

const ResEng = () => {
  const srcDoc = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <style>
          body { margin: 0; }
        </style>
      </head>
      <body>
        <div class="hq-rental-software-integration"
             data-integrator_link="https://vk-rentals.caagcrm.com/public/car-rental/integrations"
             data-brand="wdts2qbu-auvy-utkk-1uyg-ztwbnlblztg4"
             data-snippet="reservations"
             data-skip_language=""
             data-rate_type_uuid=""
             data-referral="">
        </div>
        <script src="https://vk-rentals.caagcrm.com/public/car-rental/integrations/assets/integrator"></script>
      </body>
    </html>
  `;

  return (
    <iframe
      title="Car Rental Widget"
      srcDoc={srcDoc}
      style={{ width: '100%', height: '600px', border: 'none'
        ,color: 'orange'
       }}
      sandbox="allow-scripts allow-same-origin allow-forms"
    />
  );
};

export default ResEng;

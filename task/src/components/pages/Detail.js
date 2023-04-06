import Tags from '../elements/Tags'

const Detail = () => { 
      return (
        <div className='row'>
            <div className='col-md-8'>
              DETAIL PAGE SOL TEREF
            </div>
            <div className='col-md-4'>
                <Tags title='Tags' items={['adobe', 'design', 'creative', 'designer', 'photoshop', 'illustrator']}/>
                <Tags title='Company sectors' items={['Art', 'Design', 'Photography', 'Development', 'Artist']}/>
                <Tags title='Colors' items={['Red', 'Black', 'White', 'Gray']}/>
            </div>
        </div>
      )
    }
  
  
  export default Detail
import React from 'react'
import Workflow from './workflow'

type Props = {}

const Workflows = (props: Props) => {
  return (
   <div>
    <section>
        <Workflow
        description="Creating a test workflow."
        id="efujdfsfkj"
        name="Automation workflow"
        publish={false}
        />
    </section>
   </div>
  )
}

export default Workflows
import React, { useState } from "react";
import Modal from "./../components/Modal";
import Button from "./../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        {" "}
        I Accept{" "}
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to submit !</p>
    </Modal>
  );
  return (
    <div className="relative">
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab iure,
        consequuntur officia, cupiditate accusamus inventore doloribus,
        recusandae odit harum quasi totam ad! Unde eum enim sapiente dolores
        consequuntur consequatur tenetur asperiores eligendi quia optio atque,
        at impedit ex eos natus ullam beatae possimus perspiciatis voluptate ab,
        aut delectus quasi ad cupiditate. Voluptas, vero eaque. Aut earum quasi
        iste hic! Id, soluta excepturi quis, quisquam adipisci corporis, quae
        facere maiores esse modi neque eum quia? Tempore ducimus iusto nobis eos
        dolore voluptas, sint nesciunt ipsa assumenda adipisci facilis vel animi
        delectus perspiciatis, esse natus hic saepe architecto officiis
        reprehenderit deleniti autem. Enim similique unde cum fuga impedit!
        Vitae sunt nihil, iure possimus ipsam cum laudantium fuga pariatur
        cumque deserunt inventore natus iste necessitatibus perspiciatis ab,
        nobis aperiam dolorem tempore in accusantium! Obcaecati doloribus eos
        consequatur delectus error? Quia praesentium fugiat suscipit placeat
        adipisci necessitatibus obcaecati omnis, vel temporibus officia. Commodi
        in neque, sapiente expedita quibusdam consectetur alias itaque dolorem
        laboriosam eaque rerum corrupti nemo odit reiciendis odio nisi deserunt
        asperiores atque nulla doloremque minus veritatis iusto. Maxime est enim
        id quibusdam debitis ad repudiandae iure sequi sed dignissimos similique
        dolorem, natus, neque inventore aut expedita aliquam, voluptates officia
        fugiat adipisci autem accusamus. Odit soluta eaque autem nesciunt
        blanditiis ipsam quaerat non id aspernatur rerum illum odio numquam
        sapiente voluptate, consequatur earum eos et. Cupiditate expedita
        nostrum perspiciatis voluptatem, beatae nihil, facilis amet quos,
        assumenda blanditiis eum velit? Odit fugit impedit quia rerum eos,
        deleniti nulla. Ex repellat, placeat iste nihil cupiditate atque esse
        nesciunt, vitae quibusdam dignissimos exercitationem ea eius eum quia
        quam, perferendis aspernatur voluptate doloribus deserunt. Facere labore
        harum, aspernatur laborum unde eveniet facilis tenetur distinctio
        tempora quibusdam perferendis inventore, cupiditate voluptatum totam qui
        doloremque ipsam repellat nobis quaerat vero? Ratione debitis eius quis
        delectus ad eligendi nostrum pariatur corporis ipsam omnis, voluptates
        similique libero autem ex tempore soluta ullam obcaecati, placeat dicta
        voluptatem sequi reprehenderit odio? Sint cum repudiandae eligendi,
        asperiores, perspiciatis magnam deleniti nam voluptate modi esse tempore
        voluptas placeat ea dolores reiciendis harum. Tenetur blanditiis
        adipisci, fuga reprehenderit praesentium assumenda autem ipsam veniam
        nemo incidunt eos! Nam natus sapiente quis quae earum suscipit
        exercitationem iure quo repellat? Expedita aliquam ut libero voluptates
        rerum perspiciatis, quasi, harum dolorum quam autem soluta non tempore
        tempora adipisci nihil sapiente facilis alias quibusdam. Nisi explicabo
        possimus, quam, officiis modi aut iste blanditiis soluta asperiores non
        fugit distinctio doloremque repudiandae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab iure,
        consequuntur officia, cupiditate accusamus inventore doloribus,
        recusandae odit harum quasi totam ad! Unde eum enim sapiente dolores
        consequuntur consequatur tenetur asperiores eligendi quia optio atque,
        at impedit ex eos natus ullam beatae possimus perspiciatis voluptate ab,
        aut delectus quasi ad cupiditate. Voluptas, vero eaque. Aut earum quasi
        iste hic! Id, soluta excepturi quis, quisquam adipisci corporis, quae
        facere maiores esse modi neque eum quia? Tempore ducimus iusto nobis eos
        dolore voluptas, sint nesciunt ipsa assumenda adipisci facilis vel animi
        delectus perspiciatis, esse natus hic saepe architecto officiis
        reprehenderit deleniti autem. Enim similique unde cum fuga impedit!
        Vitae sunt nihil, iure possimus ipsam cum laudantium fuga pariatur
        cumque deserunt inventore natus iste necessitatibus perspiciatis ab,
        nobis aperiam dolorem tempore in accusantium! Obcaecati doloribus eos
        consequatur delectus error? Quia praesentium fugiat suscipit placeat
        adipisci necessitatibus obcaecati omnis, vel temporibus officia. Commodi
        in neque, sapiente expedita quibusdam consectetur alias itaque dolorem
        laboriosam eaque rerum corrupti nemo odit reiciendis odio nisi deserunt
        asperiores atque nulla doloremque minus veritatis iusto. Maxime est enim
        id quibusdam debitis ad repudiandae iure sequi sed dignissimos similique
        dolorem, natus, neque inventore aut expedita aliquam, voluptates officia
        fugiat adipisci autem accusamus. Odit soluta eaque autem nesciunt
        blanditiis ipsam quaerat non id aspernatur rerum illum odio numquam
        sapiente voluptate, consequatur earum eos et. Cupiditate expedita
        nostrum perspiciatis voluptatem, beatae nihil, facilis amet quos,
        assumenda blanditiis eum velit? Odit fugit impedit quia rerum eos,
        deleniti nulla. Ex repellat, placeat iste nihil cupiditate atque esse
        nesciunt, vitae quibusdam dignissimos exercitationem ea eius eum quia
        quam, perferendis aspernatur voluptate doloribus deserunt. Facere labore
        harum, aspernatur laborum unde eveniet facilis tenetur distinctio
        tempora quibusdam perferendis inventore, cupiditate voluptatum totam qui
        doloremque ipsam repellat nobis quaerat vero? Ratione debitis eius quis
        delectus ad eligendi nostrum pariatur corporis ipsam omnis, voluptates
        similique libero autem ex tempore soluta ullam obcaecati, placeat dicta
        voluptatem sequi reprehenderit odio? Sint cum repudiandae eligendi,
        asperiores, perspiciatis magnam deleniti nam voluptate modi esse tempore
        voluptas placeat ea dolores reiciendis harum. Tenetur blanditiis
        adipisci, fuga reprehenderit praesentium assumenda autem ipsam veniam
        nemo incidunt eos! Nam natus sapiente quis quae earum suscipit
        exercitationem iure quo repellat? Expedita aliquam ut libero voluptates
        rerum perspiciatis, quasi, harum dolorum quam autem soluta non tempore
        tempora adipisci nihil sapiente facilis alias quibusdam. Nisi explicabo
        possimus, quam, officiis modi aut iste blanditiis soluta asperiores non
        fugit distinctio doloremque repudiandae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab iure,
        consequuntur officia, cupiditate accusamus inventore doloribus,
        recusandae odit harum quasi totam ad! Unde eum enim sapiente dolores
        consequuntur consequatur tenetur asperiores eligendi quia optio atque,
        at impedit ex eos natus ullam beatae possimus perspiciatis voluptate ab,
        aut delectus quasi ad cupiditate. Voluptas, vero eaque. Aut earum quasi
        iste hic! Id, soluta excepturi quis, quisquam adipisci corporis, quae
        facere maiores esse modi neque eum quia? Tempore ducimus iusto nobis eos
        dolore voluptas, sint nesciunt ipsa assumenda adipisci facilis vel animi
        delectus perspiciatis, esse natus hic saepe architecto officiis
        reprehenderit deleniti autem. Enim similique unde cum fuga impedit!
        Vitae sunt nihil, iure possimus ipsam cum laudantium fuga pariatur
        cumque deserunt inventore natus iste necessitatibus perspiciatis ab,
        nobis aperiam dolorem tempore in accusantium! Obcaecati doloribus eos
        consequatur delectus error? Quia praesentium fugiat suscipit placeat
        adipisci necessitatibus obcaecati omnis, vel temporibus officia. Commodi
        in neque, sapiente expedita quibusdam consectetur alias itaque dolorem
        laboriosam eaque rerum corrupti nemo odit reiciendis odio nisi deserunt
        asperiores atque nulla doloremque minus veritatis iusto. Maxime est enim
        id quibusdam debitis ad repudiandae iure sequi sed dignissimos similique
        dolorem, natus, neque inventore aut expedita aliquam, voluptates officia
        fugiat adipisci autem accusamus. Odit soluta eaque autem nesciunt
        blanditiis ipsam quaerat non id aspernatur rerum illum odio numquam
        sapiente voluptate, consequatur earum eos et. Cupiditate expedita
        nostrum perspiciatis voluptatem, beatae nihil, facilis amet quos,
        assumenda blanditiis eum velit? Odit fugit impedit quia rerum eos,
        deleniti nulla. Ex repellat, placeat iste nihil cupiditate atque esse
        nesciunt, vitae quibusdam dignissimos exercitationem ea eius eum quia
        quam, perferendis aspernatur voluptate doloribus deserunt. Facere labore
        harum, aspernatur laborum unde eveniet facilis tenetur distinctio
        tempora quibusdam perferendis inventore, cupiditate voluptatum totam qui
        doloremque ipsam repellat nobis quaerat vero? Ratione debitis eius quis
        delectus ad eligendi nostrum pariatur corporis ipsam omnis, voluptates
        similique libero autem ex tempore soluta ullam obcaecati, placeat dicta
        voluptatem sequi reprehenderit odio? Sint cum repudiandae eligendi,
        asperiores, perspiciatis magnam deleniti nam voluptate modi esse tempore
        voluptas placeat ea dolores reiciendis harum. Tenetur blanditiis
        adipisci, fuga reprehenderit praesentium assumenda autem ipsam veniam
        nemo incidunt eos! Nam natus sapiente quis quae earum suscipit
        exercitationem iure quo repellat? Expedita aliquam ut libero voluptates
        rerum perspiciatis, quasi, harum dolorum quam autem soluta non tempore
        tempora adipisci nihil sapiente facilis alias quibusdam. Nisi explicabo
        possimus, quam, officiis modi aut iste blanditiis soluta asperiores non
        fugit distinctio doloremque repudiandae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab iure,
        consequuntur officia, cupiditate accusamus inventore doloribus,
        recusandae odit harum quasi totam ad! Unde eum enim sapiente dolores
        consequuntur consequatur tenetur asperiores eligendi quia optio atque,
        at impedit ex eos natus ullam beatae possimus perspiciatis voluptate ab,
        aut delectus quasi ad cupiditate. Voluptas, vero eaque. Aut earum quasi
        iste hic! Id, soluta excepturi quis, quisquam adipisci corporis, quae
        facere maiores esse modi neque eum quia? Tempore ducimus iusto nobis eos
        dolore voluptas, sint nesciunt ipsa assumenda adipisci facilis vel animi
        delectus perspiciatis, esse natus hic saepe architecto officiis
        reprehenderit deleniti autem. Enim similique unde cum fuga impedit!
        Vitae sunt nihil, iure possimus ipsam cum laudantium fuga pariatur
        cumque deserunt inventore natus iste necessitatibus perspiciatis ab,
        nobis aperiam dolorem tempore in accusantium! Obcaecati doloribus eos
        consequatur delectus error? Quia praesentium fugiat suscipit placeat
        adipisci necessitatibus obcaecati omnis, vel temporibus officia. Commodi
        in neque, sapiente expedita quibusdam consectetur alias itaque dolorem
        laboriosam eaque rerum corrupti nemo odit reiciendis odio nisi deserunt
        asperiores atque nulla doloremque minus veritatis iusto. Maxime est enim
        id quibusdam debitis ad repudiandae iure sequi sed dignissimos similique
        dolorem, natus, neque inventore aut expedita aliquam, voluptates officia
        fugiat adipisci autem accusamus. Odit soluta eaque autem nesciunt
        blanditiis ipsam quaerat non id aspernatur rerum illum odio numquam
        sapiente voluptate, consequatur earum eos et. Cupiditate expedita
        nostrum perspiciatis voluptatem, beatae nihil, facilis amet quos,
        assumenda blanditiis eum velit? Odit fugit impedit quia rerum eos,
        deleniti nulla. Ex repellat, placeat iste nihil cupiditate atque esse
        nesciunt, vitae quibusdam dignissimos exercitationem ea eius eum quia
        quam, perferendis aspernatur voluptate doloribus deserunt. Facere labore
        harum, aspernatur laborum unde eveniet facilis tenetur distinctio
        tempora quibusdam perferendis inventore, cupiditate voluptatum totam qui
        doloremque ipsam repellat nobis quaerat vero? Ratione debitis eius quis
        delectus ad eligendi nostrum pariatur corporis ipsam omnis, voluptates
        similique libero autem ex tempore soluta ullam obcaecati, placeat dicta
        voluptatem sequi reprehenderit odio? Sint cum repudiandae eligendi,
        asperiores, perspiciatis magnam deleniti nam voluptate modi esse tempore
        voluptas placeat ea dolores reiciendis harum. Tenetur blanditiis
        adipisci, fuga reprehenderit praesentium assumenda autem ipsam veniam
        nemo incidunt eos! Nam natus sapiente quis quae earum suscipit
        exercitationem iure quo repellat? Expedita aliquam ut libero voluptates
        rerum perspiciatis, quasi, harum dolorum quam autem soluta non tempore
        tempora adipisci nihil sapiente facilis alias quibusdam. Nisi explicabo
        possimus, quam, officiis modi aut iste blanditiis soluta asperiores non
        fugit distinctio doloremque repudiandae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab iure,
        consequuntur officia, cupiditate accusamus inventore doloribus,
        recusandae odit harum quasi totam ad! Unde eum enim sapiente dolores
        consequuntur consequatur tenetur asperiores eligendi quia optio atque,
        at impedit ex eos natus ullam beatae possimus perspiciatis voluptate ab,
        aut delectus quasi ad cupiditate. Voluptas, vero eaque. Aut earum quasi
        iste hic! Id, soluta excepturi quis, quisquam adipisci corporis, quae
        facere maiores esse modi neque eum quia? Tempore ducimus iusto nobis eos
        dolore voluptas, sint nesciunt ipsa assumenda adipisci facilis vel animi
        delectus perspiciatis, esse natus hic saepe architecto officiis
        reprehenderit deleniti autem. Enim similique unde cum fuga impedit!
        Vitae sunt nihil, iure possimus ipsam cum laudantium fuga pariatur
        cumque deserunt inventore natus iste necessitatibus perspiciatis ab,
        nobis aperiam dolorem tempore in accusantium! Obcaecati doloribus eos
        consequatur delectus error? Quia praesentium fugiat suscipit placeat
        adipisci necessitatibus obcaecati omnis, vel temporibus officia. Commodi
        in neque, sapiente expedita quibusdam consectetur alias itaque dolorem
        laboriosam eaque rerum corrupti nemo odit reiciendis odio nisi deserunt
        asperiores atque nulla doloremque minus veritatis iusto. Maxime est enim
        id quibusdam debitis ad repudiandae iure sequi sed dignissimos similique
        dolorem, natus, neque inventore aut expedita aliquam, voluptates officia
        fugiat adipisci autem accusamus. Odit soluta eaque autem nesciunt
        blanditiis ipsam quaerat non id aspernatur rerum illum odio numquam
        sapiente voluptate, consequatur earum eos et. Cupiditate expedita
        nostrum perspiciatis voluptatem, beatae nihil, facilis amet quos,
        assumenda blanditiis eum velit? Odit fugit impedit quia rerum eos,
        deleniti nulla. Ex repellat, placeat iste nihil cupiditate atque esse
        nesciunt, vitae quibusdam dignissimos exercitationem ea eius eum quia
        quam, perferendis aspernatur voluptate doloribus deserunt. Facere labore
        harum, aspernatur laborum unde eveniet facilis tenetur distinctio
        tempora quibusdam perferendis inventore, cupiditate voluptatum totam qui
        doloremque ipsam repellat nobis quaerat vero? Ratione debitis eius quis
        delectus ad eligendi nostrum pariatur corporis ipsam omnis, voluptates
        similique libero autem ex tempore soluta ullam obcaecati, placeat dicta
        voluptatem sequi reprehenderit odio? Sint cum repudiandae eligendi,
        asperiores, perspiciatis magnam deleniti nam voluptate modi esse tempore
        voluptas placeat ea dolores reiciendis harum. Tenetur blanditiis
        adipisci, fuga reprehenderit praesentium assumenda autem ipsam veniam
        nemo incidunt eos! Nam natus sapiente quis quae earum suscipit
        exercitationem iure quo repellat? Expedita aliquam ut libero voluptates
        rerum perspiciatis, quasi, harum dolorum quam autem soluta non tempore
        tempora adipisci nihil sapiente facilis alias quibusdam. Nisi explicabo
        possimus, quam, officiis modi aut iste blanditiis soluta asperiores non
        fugit distinctio doloremque repudiandae.
      </p>
    </div>
  );
};

export default ModalPage;

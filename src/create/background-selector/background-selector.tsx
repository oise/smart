import Accordion from '@common/components/accordion';

const BackgroundSelector = () => {
  return (
    <Accordion>
      <Accordion.Item index={0}>
        <Accordion.Head>Images</Accordion.Head>
        <Accordion.Body>Image Content</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item index={1}>
        <Accordion.Head>Videos</Accordion.Head>
        <Accordion.Body>Image Content</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item index={2}>
        <Accordion.Head>Colours</Accordion.Head>
        <Accordion.Body>Colours Content</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default BackgroundSelector;

import { motion } from 'framer-motion';
import FunctionReadRow from './function-read-row';

type FunctionReadListProps = {
  contract: any;
  functions: any;
};

const FunctionReadList = ({ contract, functions }: FunctionReadListProps) => {
  return (
    <motion.div layout initial={{ borderRadius: 16 }} className="rounded-2xl">
      {functions.length > 0 ? (
        functions.map((property: any, i: number) => (
          <FunctionReadRow key={i} contract={contract} property={property} />
        ))
      ) : (
        <div></div>
      )}
    </motion.div>
  );
};

export default FunctionReadList;
